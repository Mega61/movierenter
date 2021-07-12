package juandaza.movierenter.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import juandaza.movierenter.Model.Pelicula;

@Repository
public interface RepoPelicula extends JpaRepository<Pelicula, Long> {
    
    @Query(value = "SELECT * FROM peliculas limit 4", nativeQuery = true)
    public List<Pelicula> findTopFour();

}
