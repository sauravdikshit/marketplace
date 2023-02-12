import React, { useState } from "react";
import {
  Modal,
  Portal,
  Text,
  Button,
  Provider,
  ActivityIndicator,
} from "react-native-paper";

export default function Loder({ visible, onDismiss, contentContainerStyle }) {
  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={onDismiss}
          contentContainerStyle={contentContainerStyle}
        >
          <ActivityIndicator size={40} color="green"></ActivityIndicator>
        </Modal>
      </Portal>
    </Provider>
  );
}
