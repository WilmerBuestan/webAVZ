using System;

class Ejercicio4
{
    public class Estudiante
    {
        public string Nombre;
        public int Edad;
        public double Calificacion;

        // Constructor para inicializar las propiedades con valores ficticios
        public Estudiante()
        {
            Nombre = "Juan";
            Edad = 22;
            Calificacion = 8.5;
        }

        // Método para mostrar información del estudiante
        public void MostrarInformacion()
        {
            Console.WriteLine("Detalles del estudiante:");
            Console.WriteLine("Nombre: {0}", Nombre);
            Console.WriteLine("Edad: {0}", Edad);
            Console.WriteLine("Calificación: {0}", Calificacion);
            Console.WriteLine("Estado académico: {0}", Calificacion >= 7.0 ? "Aprobado" : "Reprobado");
        }
    }

    public static void Realizar()
    {
        Console.WriteLine("==.. ejercicio 4 ..===");

        // Crear objeto de tipo Estudiante
        Estudiante estudiante1 = new Estudiante();

        // Llamar al método MostrarInformacion
        estudiante1.MostrarInformacion();
    }
}
