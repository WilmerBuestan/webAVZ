using System;

class Ejercicio5
{
    public class Estudiante
    {
        public string Nombre;
        public int Edad;
        public double Calificacion;
    }

    public class EstudianteGraduado : Estudiante
    {
        public string Titulo;
    }

    public static void Realizar()
    {
        // Código 
        EstudianteGraduado graduado1 = new EstudianteGraduado
        {
            Nombre = "Ana",
            Edad = 25,
            Calificacion = 9.0,
            Titulo = "Licenciatura en Informática"
        };

        Console.WriteLine("Ejercicio 5: Información del estudiante graduado:");
        Console.WriteLine("Nombre: {0}", graduado1.Nombre);
        Console.WriteLine("Edad: {0}", graduado1.Edad);
        Console.WriteLine("Calificación: {0}", graduado1.Calificacion);
        Console.WriteLine("Título obtenido: {0}", graduado1.Titulo);
    }
}
