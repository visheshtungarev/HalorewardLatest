import { Modal } from "antd";
import React from "react";
import "./index.css";

export default function ModalComp({
  isModalVisible,
  handleOk,
  handleCancel,
  ModalContent,
  modalTitle,
  logoShow,
}) {
  return (
    <Modal
      destroyOnClose
      title={
        modalTitle ? (
          <div className="mt-4">
            {" "}
            {logoShow ? (
              <>
                <img src="/Images/mainLogo.svg" height={40} /> &nbsp;
              </>
            ) : (
              ""
            )}{" "}
            {modalTitle}
          </div>
        ) : (
          ""
        )
      }
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {ModalContent}
    </Modal>
  );
}
