using DesafioTécnicoApi.Application.Interfaces;
using DesafioTécnicoApi.Application.Services;

class ConsoleProgram
{
    private readonly INumberService _numberService;

    public ConsoleProgram(INumberService numberService)
    {
        _numberService = numberService; 
    }


    static async Task Main(String[] args)
    {
        var numberService = new NumberService();

        Console.Write("Digite o número para decompor: ");
        int numero = int.Parse(Console.ReadLine());

        List<int> divisores = await numberService.ObterDivisores(numero);
        List<int> divisoresPrimos = await numberService.ObterDivisoresPrimos(divisores);

        Console.WriteLine($"Número de Entrada: {numero}");
        Console.Write("Números divisores: ");

        foreach (int divisor in divisores)
        {
            Console.Write($"{divisor} ");
        }

        Console.WriteLine();

        Console.Write("Divisores Primos: ");

        foreach (int primo in divisoresPrimos)
        {
            Console.Write($"{primo} ");
        }
   
        Console.ReadKey();
    }
}
