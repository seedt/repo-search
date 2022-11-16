import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

const ErrorDisplay: React.FC<{errorMessage: string}> = ({ errorMessage }) => (
  <Text type="danger" data-testid="error-message">{errorMessage}</Text>
);

export default ErrorDisplay;
