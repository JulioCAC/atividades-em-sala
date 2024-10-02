package org.example;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FornecedorPremiun extends Fornecedor{
    private double taxaDesconto;

    public FornecedorPremiun(Long id, String nome, String telefone, double taxaDesconto) {
        super(id, nome, telefone);
        this.taxaDesconto = taxaDesconto;
    }
}