import {
  Heading,
  Text,
  Flex
} from '@chakra-ui/react';
import AddSiteModal from './AddSiteModal';
import DashboardShell from './DashboardShell';

const EmptyState = () => (
  <DashboardShell>
    <Flex alignItems="center" backgroundColor="white" flexDirection="column" justifyContent="center" p={16}>
      <Heading as="h3" mb={4} size="lg">
        You haven't added any sites.
      </Heading>
      <Text mb={4}>Welcome. Let's get started</Text>
      <AddSiteModal />
    </Flex>
  </DashboardShell>
);

export default EmptyState;