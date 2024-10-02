package org.example;


public class Produto implements Negociavel {
    private Long id;
    private String nome;
    private double preco;
    private int qtdEstoque;

    public Produto(Long id, String nome, double preco, int qtdEstoque) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.qtdEstoque = qtdEstoque;
    }

    public void exibirInformacoes() {
        System.out.println("Nome: "+nome+", Preço: "+preco+", Estoque: "+qtdEstoque);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public int getQtdEstoque() {
        return qtdEstoque;
    }

    public void setQtdEstoque(int qtdEstoque) {
        this.qtdEstoque = qtdEstoque;
    }

    @Override
    public void negociar() {
        if (qtdEstoque > 0) {
            qtdEstoque--;
            System.out.println("Produto negociado! Estoque atual: "+qtdEstoque);
        } else {
            System.out.println("Não há o produto em estoque!");
        }

    }
}
