package juandaza.movierenter.Model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Id;

public class idRentar implements Serializable {

    private Long idCliente;

    private Long idPelicula;


    public idRentar(){

    }

    public idRentar(Long idCliente, Long idPelicula) {
        this.idCliente = idCliente;
        this.idPelicula = idPelicula;
    }

    public Long getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(Long idCliente) {
        this.idCliente = idCliente;
    }

    public Long getIdPelicula() {
        return idPelicula;
    }

    public void setIdPelicula(Long idPelicula) {
        this.idPelicula = idPelicula;
    }

}
