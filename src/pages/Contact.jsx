import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <Input id="name" {...register("name")} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <Input id="email" type="email" {...register("email")} />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
          <Input id="subject" {...register("subject")} />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <Textarea id="message" {...register("message")} />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Contact;