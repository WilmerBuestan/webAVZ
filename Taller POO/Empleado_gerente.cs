using System;

// Definición de la interfaz
public interface interfazMostrar
{
    void mostrarInfo();
}

// Clase base Empleado que implementa la interfazMostrar
public class Empleado : interfazMostrar
{
    // Propiedades de la clase Empleado
    public String Nombre { get; set; }
    public double Salario { get; set; }

    // Constructor de la clase Empleado
    public Empleado(String nombre, double salario)
    {
        Nombre = nombre;
        Salario = salario;
    }

    // Método para calcular el salario anual
    public double salarioAnual()
    {
        return Salario * 12;
    }

    // Implementación del método de la interfazMostrar
    public void mostrarInfo()
    {
        Console.WriteLine($"Nombre: {Nombre}");
        Console.WriteLine($"Salario Mensual: {Salario}");
        Console.WriteLine($"Salario Anual: {salarioAnual():C}");
    }
}

// Clase derivada Gerente que hereda de Empleado e implementa interfazMostrar
public class Gerente : Empleado, interfazMostrar
{
    // Propiedad adicional para el Departamento del Gerente
    public String Departamento { set; get; }

    // Constructor de la clase Gerente
    public Gerente(String nombre, double salario, String departamento) : base(nombre, salario)
    {
        Departamento = departamento;
    }

    // Nuevo método para mostrar información del Gerente, llamando al método de la clase base
    public new void mostrarInfo()
    {
        base.mostrarInfo(); // Llama al método de la clase base (Empleado)
        Console.WriteLine($"Departamento: {Departamento}");
    }
}

// Clase principal Ingreso
class Ingreso
{
    static void Main()
    {
        // Solicitar información del empleado al usuario
        Console.WriteLine($"Ingrese Nombre del Empleado:");
        string NombreEmpleado = Console.ReadLine();
        Console.WriteLine($"Salario Empleado:");
        double SalarioEmpleado;
        while (!double.TryParse(Console.ReadLine(), out SalarioEmpleado))
        {
            Console.WriteLine("Error, Ingrese el valor correcto para el salario del Empleado");
        }

        // Crear instancia de Empleado con los datos ingresados
        Empleado empleado = new Empleado(NombreEmpleado, SalarioEmpleado);

        // Solicitar información del gerente al usuario
        Console.WriteLine("Ingrese el nombre del gerente:");
        string NombreGerente = Console.ReadLine();
        Console.WriteLine($"Salario Gerente:");
        double SalarioGerente;
        while (!double.TryParse(Console.ReadLine(), out SalarioGerente))
        {
            Console.WriteLine("Error, Ingrese el valor correcto para el salario del Gerente");
        }

        Console.WriteLine("Ingrese nombre del departamento del gerente");
        string DepartamentoGerente = Console.ReadLine();

        // Crear instancia de Gerente con los datos ingresados
        Gerente gerente = new Gerente(NombreGerente, SalarioGerente, DepartamentoGerente);

        // Mostrar información utilizando polimorfismo a través de la interfazMostrar
        Console.WriteLine("\n Informacion del Empleado");
        mostrarInfo(empleado);

        Console.WriteLine("\n Informacion del Gerente");
        mostrarInfo(gerente);
    }

    // Método para mostrar información utilizando polimorfismo
    static void mostrarInfo(interfazMostrar entidad)
    {
        entidad.mostrarInfo();
    }
}
