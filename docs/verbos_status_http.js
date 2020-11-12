/*
  HTTP e os Verbos
  - Como já dissemos, o HTTP é um protocolo de comunicação web
  - Este protocolo possui 'verbos'
    * Estes verbos ajudam a identificar que tipo de ação queremos realizar numa determinada URL
    * Uma URL pode ter mais de um verbo e executar uma ação para cada um
    * Por exemplo, GET /users pode executar uma ação diferente de POST /users
  - HTTP possui vários verbos, mas os principais para as URLs são:
    * GET - utilizados para solicitar dados
    * POST - utilizamos para cadastrar dados
    * PUT/PATCH - tuilizado para autalizar algum dado
    * DELETE - utilizado para deletar algum dado
  - Um verbo junto com uma URL forma uma requisição

  Status de uma requisição HTTP
  - Os status ajudam a definir como uma requisição HTTP foi processada
  - Ao fazer uma requisição, o cliente sempre terá uma resposta
  - Os status são códigos numéricos e cada um possui uma representação
  - Os status 100 são apenas repostas informativas ao cliente
  - Os da família 200, são quando uma requisição foi processada com sucesso
    * 200 - Requisição processada com sucesso, normalmente em resposta a um GET
    * 201 - Registro criado com Sucesso, normalmente em resposta a um POST:
  - Os da família 300 apresentam mensagens de redirecionamento
  - Os da família 400 apresentam mensagens de erro que ocorreram no cliente
    * 400 - Sintaxe inválida
    * 401 - Informa que o cliente precisa se autenticar
    * 403 - Informa que o cliente, apesar de autenticado, não tem acesso permitido ao recurso.
    * 422 - Requisição bem formada, mas possui erros semânticos
  - Os da família 500 representam dados no servidor

*/