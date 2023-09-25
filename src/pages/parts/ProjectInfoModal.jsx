import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
} from '@chakra-ui/react'


export default function ProjectInfoModal(props) {
    
    const {modalOpen,modalOnClose} = props;

    return (
        <>
        <Modal isOpen={modalOpen} onClose={modalOnClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Customized ERP System</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <table>
                <tr>
                  <td>Used Language</td>
                  <td> : </td>
                  <td>PHP YII, CSS, HTML, Javascript</td>
                </tr>
                <tr>
                  <td>Development Period</td>
                  <td> : </td>
                  <td>2021 Sep - 2021 Feb</td>
                </tr>
                <tr>
                  <td>Type of Development:</td>
                  <td> : </td>
                  <td>developing for client</td>
                </tr>
              </table>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }
  