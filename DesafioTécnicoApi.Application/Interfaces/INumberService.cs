using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesafioTécnicoApi.Application.Interfaces
{
    public interface INumberService
    {
        Task<List<int>> ObterDivisores(int numero);
        Task<List<int>> ObterDivisoresPrimos(List<int> divisores);

    }
}
