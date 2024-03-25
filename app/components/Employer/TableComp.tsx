import { Table } from '@mantine/core';

interface ItemType{
     icon: any, item:React.ReactNode }

interface TableItemsType  {
    items:ItemType[]
}

    
export function TableComp({
    items
}:TableItemsType) {
  const rows = items.map((item,i) => (
    <Table.Tr key={i}>
      <Table.Td>{item.icon}</Table.Td>
    
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Account</Table.Th>
    
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}