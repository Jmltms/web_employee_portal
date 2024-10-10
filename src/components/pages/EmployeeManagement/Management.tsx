import { Badge, Typography } from "antd";
import EmployeeMngmentCard from "../../reuseables/EmployeeMngmentCard";

interface CardInfo {
  id: number;
  position: string;
  name: string;
  department: string;
}

const Management = () => {
  const card: CardInfo[] = [
    {
      id: 1,
      position: "CEO",
      name: "Whitney Francis",
      department: "",
    },
    {
      id: 2,
      position: "COO",
      name: "John Doe",
      department: "",
    },
    {
      id: 3,
      position: "General Manager",
      name: "Francis Magalona",
      department: "",
    },
    {
      id: 4,
      position: "Head Of HR",
      name: "Anne Go",
      department: "HR",
    },
    {
      id: 5,
      position: "Head of Finance",
      name: "Sherry Sy",
      department: "Finance",
    },
    {
      id: 6,
      position: "Head of Director",
      name: "Albert Go",
      department: "Director",
    },
    {
      id: 7,
      position: "Head of Sales",
      name: "Abet Lou",
      department: "Sales",
    },
    {
      id: 8,
      position: "Head of Products",
      name: "Kevin Cruz",
      department: "Products",
    },
    {
      id: 9,
      position: "Content Marketing",
      name: "Pokoy Kie",
      department: "Marketing",
    },
    {
      id: 10,
      position: "Marketing Executive",
      name: "Alben Burja",
      department: "Marketing Executive",
    },
    {
      id: 11,
      position: "Social Marketing",
      name: "Kokoy Bugoy",
      department: "Social Marketing",
    },
  ];
  const { Text, Paragraph } = Typography;

  const selectFirstTwo = card.filter((_, index) => index < 3);
  const selectTwoLast = card.filter((_, index) => index > 2);

  return (
    <>
      <div className=" flex flex-col items-center justify-center mt-16 mb-12 space-y-3">
        <Text className="font-sans text-3xl font-bold">Management Team</Text>
        <Paragraph className=" font-sans text-lg text-neutral-500">
          Hi, we are the management team! Here to drive innovation, growth, and
          success every step of the way.
        </Paragraph>
      </div>
      <div className="grid grid-flow-row grid-cols-3 gap-10 justify-center items-center">
        {selectFirstTwo.map(({ id, position, name, department }) => (
          <Badge.Ribbon text="Hello" key={id}>
            <EmployeeMngmentCard>
              <EmployeeMngmentCard.Profile source="../images/prof.jpg" />
              <div className=" flex flex-col justify-center items-center">
                <EmployeeMngmentCard.Name name={name} />
                <EmployeeMngmentCard.Position position={position} />
                <EmployeeMngmentCard.Department department={department} />
              </div>
              {EmployeeMngmentCard.Social && (
                <EmployeeMngmentCard.Social viber="#" email="#" />
              )}
            </EmployeeMngmentCard>
          </Badge.Ribbon>
        ))}
      </div>
      <div className="grid grid-flow-row grid-cols-4 gap-10 my-10">
        {selectTwoLast.map(({ id, position, name, department }, index) => (
          <EmployeeMngmentCard key={index}>
            <EmployeeMngmentCard.Profile source="../images/prof.jpg" />
            <div className=" flex flex-col justify-center items-center">
              <EmployeeMngmentCard.Name name={name} />
              <EmployeeMngmentCard.Position position={position} />
              <EmployeeMngmentCard.Department department={department} />
            </div>
            {EmployeeMngmentCard.Social && (
              <EmployeeMngmentCard.Social viber="#" email="#" />
            )}
            {EmployeeMngmentCard.Modal && (
              <EmployeeMngmentCard.Modal id={id} department={department} />
            )}
          </EmployeeMngmentCard>
        ))}
      </div>
    </>
  );
};

export default Management;
