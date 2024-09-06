
using DesafioTécnicoApi.Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesafioTécnicoApi.Application.Services
{
    public class NumberService : INumberService
    {
        public async Task<List<int>> ObterDivisores(int numero)
        {
            List<int> divisores = new List<int>();
            for (int i = 1; i <= numero; i++)
            {
                if (numero % i == 0)
                {
                    divisores.Add(i);
                }
            }
            return divisores;
        }

        public async Task<List<int>> ObterDivisoresPrimos(List<int> divisores)
        {
            return divisores.Where(IsPrimo).ToList();
        }

        private bool IsPrimo(int numero)
        {
            if (numero == 2) return true;

            for (int i = 2; i <= Math.Sqrt(numero); i++)
            {
                if (numero % i == 0) return false;
            }
            return true;
        }
    }
}
