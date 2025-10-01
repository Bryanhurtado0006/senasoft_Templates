import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import reactLogo from '../assets/react.svg'

const features = [
  { title: "Membership Organisations", text: "Automatiza renovaciones y pagos de membresía." },
  { title: "National Associations", text: "Automatiza renovaciones y pagos de membresía." },
  { title: "Clubs And Groups", text: "Automatiza renovaciones y pagos de membresía." }
]

const LandingPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <>
      {/* Hero */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center gy-4">
            <Col md={6}>
              <h1 className="fw-bold lh-1">
                Conoce a los mejores <span className="text-success">candidatos</span>
              </h1>
              <p className="text-muted">Conoce a los mejores candidatos de tu centro de formación</p>
              <div className="d-flex gap-2">
                <Button variant="success" onClick={() => navigate('/register')}>Regístrame</Button>
                <Button variant="outline-secondary" onClick={() => navigate('/login')}>Login</Button>
              </div>
            </Col>
            <Col md={6} className="text-center">
              <img src={reactLogo} alt="Ilustración" className="img-fluid" style={{ maxHeight: 260, objectFit: 'contain' }} />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features */}
      <section className="py-5">
        <Container>
          <Row className="mb-4 text-center">
            <Col>
              <h2 className="fw-bold">Controla toda tu comunidad desde un solo sistema</h2>
              <p className="text-muted">Lorem ipsum dolor sit amet, googr tre wjvndk.</p>
            </Col>
          </Row>
          <Row className="g-4">
            {features.map((f, i) => (
              <Col md={4} key={i}>
                <Card className="h-100 shadow-sm border-light">
                  <Card.Body>
                    <Card.Title>{f.title}</Card.Title>
                    <Card.Text>{f.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Destacado */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center gy-4">
            <Col md={6} className="text-center">
              <img src={reactLogo} alt="Seguridad" className="img-fluid" style={{ maxHeight: 260, objectFit: 'contain' }} />
            </Col>
            <Col md={6}>
              <h3 className="fw-bold">Seguridad en todo momento al alcance de un click</h3>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat vestibulum lorem sed porta.
              </p>
              <Button variant="success" onClick={() => navigate('/maps')}>Learn More</Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA final */}
      <section className="py-5">
        <Container>
          <Row>
            <Col className="text-center">
              <h2 className="fw-bold">Conoce más sobre nosotros</h2>
              <p className="text-muted">Contáctanos</p>
              <Button variant="success" onClick={() => navigate('/register')}>Contáctanos →</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default LandingPage
