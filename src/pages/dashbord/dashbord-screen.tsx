import React from "react";
import { Card } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import "../../styles/dashboard/dashboard-main.scss";
import user from "../../assets/dashboard/users.png";
import order from "../../assets/dashboard/orders.png";
import pending from "../../assets/dashboard/pending.png";
import sales from "../../assets/dashboard/sales.png";

interface DashCardProps {
  title: string;
  content: string;
  rating: "increase" | "decrease";
  percentage: number;
  value: number;
  icon: string;
  color: string;
}

function Dashboard() {
  return (
    <div className="dashboard-main">
      <h1 className="dashboard-title">Dashboard</h1>
      <section className="rating-section">
        <DashCard
          title="Today's Sales"
          content="1,234,567"
          rating="increase"
          percentage={10}
          value={1234567}
          icon={user}
          color="green"
        />
        <DashCard
          title="Product Sales"
          content="1,234,567"
          rating="decrease"
          percentage={-10}
          value={1234567}
          icon={order}
          color="red"
        />
        <DashCard
          title="Customers"
          content="1,234,567"
          rating="increase"
          percentage={10}
          value={1234567}
          icon={pending}
          color="blue"
        />
        <DashCard
          title="Revenue"
          content="1,234,567"
          rating="decrease"
          percentage={-10}
          value={1234567}
          icon={sales}
          color="yellow"
        />
      </section>
    </div>
  );
}

export default Dashboard;

const DashCard: React.FC<DashCardProps> = ({
  title,
  content,
  rating,
  percentage,
  value,
  icon,
}) => {
  // const IconComponent = iconMap[icon];
  return (
    <section className="dashboard-card">
      <div>
        <div className="dash-card-header">
          <h3>{title}</h3>
          <span>{value.toLocaleString("hi-IN")}</span>
        </div>
        <div >
          <img src={icon} alt={title} />
        </div>
      </div>
      <div className={`dash-card-rating ${rating}`}>
        {rating === "increase" ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
        <span>
          {Math.abs(percentage)}% {content}
        </span>
      </div>
    </section>
  );
};
