using System;

class Ejercicio3
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
    }

    public static void Realizar()
    {
        Console.WriteLine("=--- Ejercicio 3 =---=");

        // Crear objeto de tipo Estudiante
        Estudiante estudiante1 = new Estudiante();

        // Imprimir en la consola la información del estudiante
        Console.WriteLine("Información del estudiante:");
        Console.WriteLine("Nombre: {0}", estudiante1.Nombre);
        Console.WriteLine("Edad: {0}", estudiante1.Edad);
        Console.WriteLine("Calificación: {0}", estudiante1.Calificacion);
    }
}
