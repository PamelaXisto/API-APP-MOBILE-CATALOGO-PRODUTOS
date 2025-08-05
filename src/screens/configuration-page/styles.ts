import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2567E8',
  },
  blue: {
    height: 200,
    backgroundColor: '#2567E8',
  },
  white: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    paddingTop: 80,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    position: 'absolute',
    top: -50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#656565',
    marginBottom: 20,
  },

  button: {
    width: '90%',
    paddingVertical: 14,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#454545',
    marginBottom: 15,
  },

  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  buttonText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: '#454545',
    fontWeight: 'bold',
  },

  logout: {
    width: '90%',
    height: '9%',
    backgroundColor: '#E63535',
    paddingVertical: 15,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonTextLogout: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },


// LOGOUT
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 24,
    alignItems: 'flex-end',
    position: 'relative',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 8,
    right: 12,
    zIndex: 1,
  },
  closeTextX: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8C8C8C',
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 24,
    fontWeight: '600',
    alignSelf: 'flex-start',
    textAlign: 'left',
  },
  modalSubTitle: {
    fontSize: 14,
    marginBottom: 24,
    color: '#8C8C8C',
    alignSelf: 'flex-start',
    textAlign: 'left',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  backButton: {
    width: 90,
    borderRadius: 6,
    padding: 11,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#C7C6C6',
  },
  exitButton: {
    width: 70,
    backgroundColor: '#E63535',
    borderRadius: 5,
    padding: 11,
    marginLeft: 12,
    alignSelf: 'flex-start',
    textAlign: 'left',
  },
  buttonTextCancelar: {
    color: '#605c5cff',
    fontWeight: '600',
    borderRadius: 1,
    textAlign: 'center'
  },
  buttonTextSair: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '500',
  },

});
