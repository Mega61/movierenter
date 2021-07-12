package juandaza.movierenter.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import juandaza.movierenter.Model.Busqueda;
import juandaza.movierenter.Model.Cliente;
import juandaza.movierenter.Model.Pelicula;
import juandaza.movierenter.Model.Rentar;
import juandaza.movierenter.Repository.RepoCliente;
import juandaza.movierenter.Repository.RepoPelicula;
import juandaza.movierenter.Repository.RepoRentar;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping(path = "/api")
public class ControllerCliente {

    @Autowired
    private RepoCliente repoCliente;

    @Autowired
    private RepoPelicula repoPelicula;

    @Autowired
    private RepoRentar repoRentar;

    public ControllerCliente(RepoCliente repoCliente, RepoPelicula repoPelicula, RepoRentar repoRentar) {
        this.repoCliente = repoCliente;
        this.repoPelicula = repoPelicula;
        this.repoRentar = repoRentar;
    }

    @GetMapping("peliculasparciales")
    public List<Pelicula> getFourPeliculas() {
        return this.repoPelicula.findTopFour();
    }

    @GetMapping("peliculas")
    public List<Pelicula> getPeliculas() {
        return this.repoPelicula.findAll();
    }

    @GetMapping("users")
    public List<Cliente> getClientes() {
        return this.repoCliente.findAll();
    }

    @PostMapping("users")
    public Cliente crearCliente(@RequestBody Cliente elCliente) {
        return repoCliente.save(elCliente);
    }

    @PostMapping("inicioSesion")
    public List<Cliente> iniciarSesion(@RequestBody Busqueda laBusqueda) {
        System.out.println(laBusqueda.getCorreo() + " " + laBusqueda.getContrasegna());
        return repoCliente.comprobarInicioSesion(laBusqueda.getCorreo(), laBusqueda.getContrasegna());
    }

    @PostMapping("checkoutRentar")
    public boolean crearRenta(Rentar laRenta) {

        //repoRentar.insercionManual(laRenta.getIdCliente(), laRenta.getIdPelicula(), laRenta.getFechaAlquiler());
        repoRentar.save(laRenta);

        return true;

        // return repoRentar.insercionManual(laRenta.getIdCliente(),
        // laRenta.getIdPelicula(), laRenta.getFechaAlquiler());
    }

}
