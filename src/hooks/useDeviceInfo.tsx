import { useEffect, useState } from 'react';
import DeviceInfo from 'react-native-device-info';

type DeviceInfoType = {
  brand: string;
  systemName: string;
  systemVersion: string;
  model: string;
  uniqueId: string;
  deviceId: string;
};

const useDeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfoType>();

  useEffect(() => {
    const fetchDeviceInfo = async () => {
      const brand = DeviceInfo.getBrand();
      const systemName = DeviceInfo.getSystemName();
      const systemVersion = DeviceInfo.getSystemVersion();
      const model = DeviceInfo.getModel();
      const uniqueId = await DeviceInfo.getUniqueId();
      const deviceId = DeviceInfo.getDeviceId();

      setDeviceInfo({
        brand,
        systemName,
        systemVersion,
        model,
        uniqueId,
        deviceId,
      });
    };

    fetchDeviceInfo();
  }, []);

  return deviceInfo;
};

export default useDeviceInfo;
