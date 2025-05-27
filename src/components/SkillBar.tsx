import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  percentage: number;
  color: string;
}

const SkillBar = ({ name, percentage, color }: SkillBarProps) => {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1">
        <span className="text-white font-medium">{name}</span>
        <span className="text-white/70">{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-dark-300 rounded-full overflow-hidden">
        <motion.div 
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

export default SkillBar;