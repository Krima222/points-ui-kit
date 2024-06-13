import { MantineProvider, LoadingOverlay } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

export function DoatsLoader() {
  // const [visible, { toggle }] = useDisclosure(true);
  return (
    <MantineProvider>
      <LoadingOverlay
        // visible={visible}
        zIndex={1000}
        overlayProps={{ radius: 'sm', blur: 2 }}
        loaderProps={{ color: 'blue', type: 'dots' }}
      />
    </MantineProvider>
  );
}
