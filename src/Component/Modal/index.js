import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { GiClick } from "react-icons/gi";
import "./Modal.css";

const NewsModal = ({ show, onHide, showModalInfo }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {showModalInfo?.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {Array.isArray(showModalInfo.image) ? (
          <img
            src={showModalInfo?.image[0]}
            alt={showModalInfo.title}
            className="modal-img"
          />
        ) : (
          <img src={showModalInfo?.image} alt={showModalInfo.title} />
        )}
        <section className="textsContainer">
          <div className="textInfo">
            {showModalInfo?.texts?.map((i, index) => (
              <p key={index}>{i}</p>
            ))}
          </div>

          {showModalInfo?.url && (
            <p>
              <a
                href={showModalInfo.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                voir le site
              </a>
              <GiClick /> <br />
            </p>
          )}
          {showModalInfo?.sourceFront && (
            <p>
              <a
                href={showModalInfo.sourceFront}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github: Front-end
              </a>
              <GiClick /> <br />
            </p>
          )}
          {showModalInfo?.sourceBack && (
            <p>
              <a
                href={showModalInfo.sourceBack}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github: Back-end
              </a>
              <GiClick /> <br />
            </p>
          )}
        </section>
      </Modal.Body>
      <Modal.Footer>
        {showModalInfo?.language?.map((i, index) => (
          <p className="langages" key={index}>
            <strong>{i} </strong>
          </p>
        ))}
      </Modal.Footer>
    </Modal>
  );
};

export default NewsModal;
