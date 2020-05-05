Feature: Login site SENAC - Graduação

    Background: Acessar o site Portal do Aluno SENAC
        Given acesso o site Portal do Aluno SENAC

    @testeum
    Scenario: Visualizar opção de lembrar meu login
        Then devo visualizar a opção de lembrar meu login
        Then marco a opção de lembrar meu login

    @testedois
    Scenario Outline: Realizar login com dados inválidos
        Given informo o usuário <usuario> incorreto
        And informo a senha <senha> incorreta
        When clico no botão de realizar login
        Then devo visualizar mensagem de erro

        Examples:
            | usuario   | senha   |
            | 123456789 | 123456  |
            | 987456123 | 123456  |
