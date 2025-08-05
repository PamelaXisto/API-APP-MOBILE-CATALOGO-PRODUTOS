import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, Modal, Pressable } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { router } from 'expo-router';

export default function ConfigurationUser() {
  const [modalVisible, setModalVisible] = useState(false);

  function handleConfirmLogout() {
    setModalVisible(false);
    router.replace('/');
  }

  return (
    <View style={styles.container}>
      <View style={styles.blue} />

      <View style={styles.white}>
        <Image
          source={require('../../assets/foto-user.jpg')}
          style={styles.image}
        />

        <Text style={styles.name}>João da Silva</Text>
        <Text style={styles.email}>joaodasilva@gmail.com</Text>

        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContent}>
            <Icon name="account" size={26} color="#454545" />
            <Text style={styles.buttonText}>Meus dados</Text>
            <Icon name="chevron-right" size={24} color="#454545" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContent}>
            <Icon name="bell" size={26} color="#454545" />
            <Text style={styles.buttonText}>Notificações</Text>
            <Icon name="chevron-right" size={24} color="#454545" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContent}>
            <Icon name="file-document" size={26} color="#454545" />
            <Text style={styles.buttonText}>Termos de uso</Text>
            <Icon name="chevron-right" size={24} color="#454545" />
          </View>
        </TouchableOpacity>



        <TouchableOpacity style={styles.logout} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonTextLogout}>Sair da conta</Text>
        </TouchableOpacity>
      </View>

      <Modal transparent visible={modalVisible} animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.modalCard}>

            <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeTextX}>×</Text>
            </Pressable>

            <Text style={styles.modalTitle}>Sair da conta</Text>
            <Text style={styles.modalSubTitle}>Você tem certeza que deseja sair da conta? </Text>
            

            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.backButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonTextCancelar}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.exitButton} onPress={handleConfirmLogout}>
                <Text style={styles.buttonTextSair}>Sair</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
