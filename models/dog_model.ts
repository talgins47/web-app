import mongoose from "mongoose";

export interface Idog {
  bread: string;
  Height: number;
  Weight: number;
  lifeSpan: string;
}

const dogSchema = new mongoose.Schema<Idog>({  
    bread: { type: String, required: true },
    Height: { type: Number, required: true },
    Weight: { type: Number, required: true },
    lifeSpan: { type: String, required: true }
 
});

export default mongoose.model<Idog>("dog", dogSchema);