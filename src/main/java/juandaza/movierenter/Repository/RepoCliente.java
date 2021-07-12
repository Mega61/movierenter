package juandaza.movierenter.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import juandaza.movierenter.Model.Cliente;

@Repository
public interface RepoCliente extends JpaRepository<Cliente, Long> {

    @Query(value = "SELECT * FROM clientes c WHERE c.correo = :correo AND c.contrasegna = :contra", nativeQuery = true)
    public List<Cliente> comprobarInicioSesion(@Param("correo") String correo, @Param("contra") String contrasegna);
}
