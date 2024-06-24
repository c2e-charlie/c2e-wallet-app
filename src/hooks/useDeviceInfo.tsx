import React, { useEffect, useState } from 'react';
import DeviceInfo from 'react-native-device-info';
import { version as appVersion } from '../../package.json';

type DeviceInfoType = {
  deviceName: string;
  osType: string;
  osVersion: string;
  deviceModel: string;
  deviceId: string;
  deviceType: string;
  appVersion: string;
  deviceUserAgent: string;
};

const useDeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfoType>();

  useEffect(() => {
    const fetchDeviceInfo = async () => {
      const deviceId = await DeviceInfo.getUniqueId();
      const deviceType = DeviceInfo.getDeviceType();
      const deviceName = await DeviceInfo.getDeviceName();
      const deviceModel = DeviceInfo.getModel();
      const deviceUserAgent = await DeviceInfo.getUserAgent();
      const osType = DeviceInfo.getSystemName();
      const osVersion = DeviceInfo.getSystemVersion();

      setDeviceInfo({
        deviceId,
        deviceType,
        deviceName,
        deviceModel,
        deviceUserAgent,
        osType,
        osVersion,
        appVersion,
      });
    };

    fetchDeviceInfo();
  }, []);

  return deviceInfo;
};

export default useDeviceInfo;
