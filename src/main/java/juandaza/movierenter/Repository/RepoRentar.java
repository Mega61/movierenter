package juandaza.movierenter.Repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import juandaza.movierenter.Model.Rentar;
import juandaza.movierenter.Model.idRentar;

@Repository
public interface RepoRentar extends JpaRepository<Rentar, idRentar> {

    @Transactional
    @Modifying
    @Query(value = "INSERT INTO rentar ('idCliente', 'idPelicula', 'fechaAlquiler') VALUES (?1, ?2, ?3)", nativeQuery = true)
    public void insercionManual(Long idCliente, Long idPelicula, String fechaAlquiler);

}
