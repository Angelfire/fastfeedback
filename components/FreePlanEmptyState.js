import {
  Heading,
  Box,
  Text,
  Button
} from '@chakra-ui/react';
import DashboardShell from './DashboardShell';

const FreePlanEmptyState = () => (
  <DashboardShell>
    <Box backgroundColor="white" p={8}>
      <Heading as="h3" size="lg">
        Get feedback on your site instantly.
      </Heading>
      <Text>Start today, then grow with us</Text>
      <Button
        variant="solid"
        size="md"
        mt={4}
        backgroundColor="black"
        color="white"
      >
        Upgrade to Starter
      </Button>
    </Box>
  </DashboardShell>
);

export default FreePlanEmptyState;