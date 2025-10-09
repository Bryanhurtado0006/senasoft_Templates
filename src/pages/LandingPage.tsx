import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Persons from '../assets/persons.png' // Imagen genérica de personas

const LandingPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <main className="min-vh-100 bg-white d-flex align-items-center justify-content-center px-3 py-5">
      <Container>
        <Row>
          <Col xs={12} className="p-0">
            <img
              src={Persons}
              alt="Imagen principal"
              className="w-100 mb-4"
              style={{
                maxHeight: "280px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </Col>
        </Row>

        <Row className="justify-content-center text-center mt-4">
          <Col xs={12} md={10} lg={9}>
            <h1 className="fw-bold display-5 fs-1 mb-3">
              Bienvenido a <span style={{ color: "#007bff" }}>nuestra plataforma</span>
            </h1>

            <p className="text-muted fs-6 mb-4 mx-auto" style={{ maxWidth: "700px" }}>
              Una solución moderna, fácil de usar y adaptable a cualquier tipo de proyecto o negocio. 
              Empieza hoy a construir tu experiencia digital con nosotros.
            </p>

            <div className="mb-4">
              <Button
                onClick={() => navigate('/login')}
                className="px-5 py-2 fw-semibold me-3"
                style={{
                  backgroundColor: "#007bff",
                  border: "none",
                  fontSize: "1.1rem",
                  marginTop: "20px",
                }}
              >
                Iniciar Sesión
              </Button>

              <Button
                onClick={() => navigate('/register')}
                variant="outline-primary"
                className="px-5 py-2 fw-semibold"
                style={{
                  fontSize: "1.1rem",
                  marginTop: "20px",
                }}
              >
                Registrarse
              </Button>
            </div>

            <div className="mt-4">
              <Button
                onClick={() => navigate('/landing-v2')}
                variant="outline-success"
                className="px-4 py-2 fw-semibold"
                style={{
                  fontSize: "1rem",
                  borderColor: "#28a745",
                  color: "#28a745",
                }}
              >
                Ver Landing V2 🚀
              </Button>
            </div>

            <div
              className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-4 mt-5"
              style={{ marginTop: "60px" }}
            >
              <div className="text-center">
                <h6 className="fw-bold text-primary mb-1"> Funcionalidad 1</h6>
                <small className="text-muted">Descripción breve</small>
              </div>

              <div
                className="d-none d-md-block"
                style={{ width: 1, height: 30, backgroundColor: "#dee2e6" }}
              />

              <div className="text-center">
                <h6 className="fw-bold text-primary mb-1"> Funcionalidad 2</h6>
                <small className="text-muted">Descripción breve</small>
              </div>

              <div
                className="d-none d-md-block"
                style={{ width: 1, height: 30, backgroundColor: "#dee2e6" }}
              />

              <div className="text-center">
                <h6 className="fw-bold text-primary mb-1"> Funcionalidad 3</h6>
                <small className="text-muted">Descripción breve</small>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default LandingPage
