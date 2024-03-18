class IPv4Service {
    static async getIPv4(): Promise<string | null> {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            return data.ip;
          } catch (error) {
            console.error('Erro ao obter o endereço IPv4:', error);
            return null;
          }
        }
}

export default IPv4Service;
