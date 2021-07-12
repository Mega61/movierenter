package juandaza.movierenter.Model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity
@Table(name = "rentar")
@IdClass(idRentar.class)
public class Rentar implements Serializable{
    

    @Id
    @Column (name = "idcliente")
    private Long idCliente;

    @Id
    @Column (name = "idpelicula")
    private Long idPelicula;

    @Column(name = "fechaalquiler")
    private String fechaAlquiler;

    @Column(name = "fechadevolucion")
    private String fechaDevolucion;

    public Rentar(){
        
    }

    public Rentar(Long idCliente, Long idPelicula, String fechaAlquiler, String fechaDevolucion) {
        this.idCliente = idCliente;
        this.idPelicula = idPelicula;
        this.fechaAlquiler = fechaAlquiler;
        this.fechaDevolucion = fechaDevolucion;
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

    public String getFechaAlquiler() {
        return fechaAlquiler;
    }

    public void setFechaAlquiler(String fechaAlquiler) {
        this.fechaAlquiler = fechaAlquiler;
    }

    public String getFechaDevolucion() {
        return fechaDevolucion;
    }

    public void setFechaDevolucion(String fechaDevolucion) {
        this.fechaDevolucion = fechaDevolucion;
    }

    


}
