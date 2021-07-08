package juandaza.movierenter.Repository;

import org.springframework.data.repository.CrudRepository;

import juandaza.movierenter.Model.Cliente;

public interface RepoCliente extends CrudRepository<Cliente, Integer> {

}
