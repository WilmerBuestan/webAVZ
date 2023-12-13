using System;

class Program
{
    static void Main()
    {
        while (true)
        {
            MostrarMenu();

            // Leer 
            Console.Write("Seleccione un ejercicio (1-5, o 0 para salir): ");
            string opcion = Console.ReadLine();

            if (opcion == "0")
            {
                Console.WriteLine("Saliendo del programa. ¡Hasta luego!");
                break;
            }

            EjecutarEjercicio(opcion);
        }
    }

    static void MostrarMenu()
    {
        Console.WriteLine("\n=== Menú de Ejercicios ===");
        Console.WriteLine("1. Ejercicio 1");
        Console.WriteLine("2. Ejercicio 2");
        Console.WriteLine("3. Ejercicio 3");
        Console.WriteLine("4. Ejercicio 4");
        Console.WriteLine("5. Ejercicio 5");
        Console.WriteLine("0. Salir");
    }

    static void EjecutarEjercicio(string opcion)
    {
        switch (opcion)
        {
            case "1":
                Ejercicio1.Realizar();
                break;
            case "2":
                Ejercicio2.Realizar();
                break;
            case "3":
                Ejercicio3.Realizar();
                break;
            case "4":
                Ejercicio4.Realizar();
                break;
            case "5":
                Ejercicio5.Realizar();
                break;
            default:
                Console.WriteLine("Opción no válida. Intente de nuevo.");
                break;
        }
    }
}
