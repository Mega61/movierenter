package juandaza.movierenter.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import juandaza.movierenter.Model.Pelicula;

@Repository
public interface RepoPelicula extends JpaRepository<Pelicula, Long> {
}
