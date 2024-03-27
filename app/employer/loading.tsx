import { Box, LoadingOverlay, Overlay, Skeleton } from "@mantine/core";

export default function Loading() {
   
    return (<>
  
  <Box pos="relative">
        <LoadingOverlay
        
          visible={true}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'pink', type: 'bars' }}
        />
  
      </Box>
    </>)
  }