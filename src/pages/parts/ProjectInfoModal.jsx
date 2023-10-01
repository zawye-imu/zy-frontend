import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton
} from '@chakra-ui/react'


export default function ProjectInfoModal(props) {
    
    const {modalOpen,modalOnClose,data} = props;

    console.log("logging",data);

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
                  <td> {data?.detailInfo?.usedLanguage}</td>
                </tr>
                <tr>
                  <td>Development Period</td>
                  <td> : </td>
                  <td>{data?.detailInfo?.period}</td>
                </tr>
                <tr>
                  <td>Type of Development:</td>
                  <td> : </td>
                  <td> {data?.detailInfo?.type}</td>
                </tr>
                <tr>
                  <td>General Duties:</td>
                  <td> : </td>
                  <td> {data?.detailInfo?.duties}</td>
                </tr>
                <tr>
                  <td>Team Members:</td>
                  <td> : </td>
                  <td> {data?.detailInfo?.membersCount}</td>
                </tr>
              </table>
              <br></br>
              <p>
                {data?.detailInfo?.explanation}
              </p>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }
  