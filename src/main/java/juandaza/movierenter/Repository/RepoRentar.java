package juandaza.movierenter.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import juandaza.movierenter.Model.Rentar;
import juandaza.movierenter.Model.idRentar;

@Repository
public interface RepoRentar extends JpaRepository<Rentar, idRentar> {


    @Query(value = "INSERT INTO rentar ('idCliente', 'idPelicula', 'fechaAlquiler') VALUES (:idC, :idP, :fechaA)", nativeQuery = true)
    public Rentar insercionManual(@Param("idC") Long idCliente, @Param("idP") Long idPelicula, @Param("fechaA") String fechaAlquiler);

}
