// Adicionando o evento de submit ao formulário
document.getElementById('loginForm').addEventListener('submit', validarLogin);

// Credenciais pré-definidas (exemplo)
const usuarioValido = 'admin';
const senhaValida = '123';

// Função de validação de login
function validarLogin(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtendo os valores dos campos
    const usuario = document.getElementById('username').value;
    const senha = document.getElementById('password').value;

    // Credenciais pré-definidas (exemplo)
    const usuarioValido = 'usuario@example.com';
    const senhaValida = 'senha123';

    // Verificando as credenciais
    if (usuario === usuarioValido && senha === senhaValida) {
        alert('Login bem-sucedido!');
        // Redirecionar para outra página (opcional)
        // window.location.href = 'pagina-principal.html';
    } else {
        alert('Usuário ou senha incorretos.');
    }
}