import React from 'react';
import { Button } from 'antd';

const Pagination: React.FC<{
  isLoading: boolean;
  hasNext: boolean;
  hasPrevious: boolean;
  onPrevious: () => void;
  onNext: () => void;
}> = ({
  hasPrevious,
  hasNext,
  isLoading,
  onPrevious,
  onNext,
}) => (
  <div data-testid="pagination">
    <Button loading={isLoading} disabled={!hasPrevious} onClick={onPrevious} data-testid="btn-previous">
      Previous
    </Button>
    <Button loading={isLoading} disabled={!hasNext} onClick={onNext} data-testid="btn-next">
      Next
    </Button>
  </div>
);

export default Pagination;
