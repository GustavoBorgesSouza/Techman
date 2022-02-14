using Patrimonio.Contexts;
using Patrimonio.Domains;
using Patrimonio.Interfaces;
using Patrimonio.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Patrimonio.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {

        private readonly PatrimonioContext ctx;

        public UsuarioRepository(PatrimonioContext appContext)
        {
            ctx = appContext;
        }

        public Usuario Login(string email, string senha)
        {
            var usuario = ctx.Usuarios.FirstOrDefault(u => u.Email == email);

            if (usuario != null)
            {
                //com usuário encontrado temos a hash do banco para comparar com a senha vinda do usuário
                if (usuario.Senha.Length < 60)
                {
                    usuario.Senha = Criptografia.GerarHash(usuario.Senha);

                    ctx.Usuarios.Update(usuario);

                    ctx.SaveChanges();
                }

                bool comparado = Criptografia.Comparar(senha, usuario.Senha);

                if (comparado == true)
                {
                    return usuario;
                }
            } 

            return null;
        }
    }
}
