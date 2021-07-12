package juandaza.movierenter.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import juandaza.movierenter.Model.Rentar;
import juandaza.movierenter.Model.idRentar;

@Repository
public interface RepoRentar extends JpaRepository<Rentar, idRentar> {

}
