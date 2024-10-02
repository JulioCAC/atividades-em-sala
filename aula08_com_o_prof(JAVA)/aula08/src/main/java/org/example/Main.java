package org.example;

public class Main {
    public static void main(String[] args) {
        Produto produto1 = new Produto(1L, "Arroz", 7.49, 4);
        Fornecedor fornecedor1 = new Fornecedor(1L, "Urbano LTDA", "(11)999999999");

        produto1.exibirInformacoes();
        produto1.negociar();
        produto1.exibirInformacoes();





    }
}