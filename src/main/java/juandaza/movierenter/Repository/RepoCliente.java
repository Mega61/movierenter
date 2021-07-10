package juandaza.movierenter.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import juandaza.movierenter.Model.Cliente;

@Repository
public interface RepoCliente extends JpaRepository<Cliente, Long> {

}
