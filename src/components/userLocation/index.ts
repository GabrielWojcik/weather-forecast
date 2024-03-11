interface LocationData {
  lat: number;
  lng: number;
}

export function getUserLocation(): Promise<LocationData> {
  return new Promise<LocationData>((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          resolve({ lat, lng });
        },
        error => {
          reject(error);
        }
      );
    } else {
      reject(new Error("Geolocalização não disponível"));
    }
  });
}