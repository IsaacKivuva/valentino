import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ValentineQuestion() {
  return (
    <motion.div
      className="text-center space-y-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold">Will you be my Valentine? 💌</h1>
      <p className="text-xl">Only yes allowed💀😂</p>
      <Button className="border rounded"><Link href="https://open.spotify.com/playlist/2AOUJzxNxoIndgDLNe7lNH?si=_rOSbI5IQx2gywcBX8ywUg&pi=R6iCfC5fQLSho">Yes 💖</Link></Button>
    </motion.div>
  );
}
