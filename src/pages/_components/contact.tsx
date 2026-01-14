import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { LucideGithub, LucideLinkedin } from "@/components/icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v4";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.email({ message: "Please enter a valid email address" }),
  subject: z
    .string()
    .min(2, { message: "Subject must be at least 2 characters" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});
type ContactFormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      setIsLoading(true);
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Thank you for your message! I'll get back to you soon.");
      form.reset();
    } catch (err) {
      toast.error("Oops! Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Let's
            discuss how we can work together to bring your ideas to life.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Let's Connect
              </h3>

              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="text-blue-600 dark:text-blue-400 w-6 h-6 mr-4" />
                  <div>
                    <div className="text-gray-600 dark:text-gray-300">
                      eguavoenemmanuel2019@gmail.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="text-blue-600 dark:text-blue-400 w-6 h-6 mr-4" />
                  <div>
                    <div className="text-gray-600 dark:text-gray-300">
                      +2348103951856
                    </div>
                  </div>
                </div>

                {/* <div className="flex items-center">
                  <MapPin className="text-blue-600 dark:text-blue-400 w-6 h-6 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-800 dark:text-white">
                      Location
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Lagos State, Nigeria.
                    </div>
                  </div>
                </div> */}
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Emmavoen"
                    className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white transition-colors"
                  >
                    <LucideGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/emmavoen/"
                    className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white transition-colors"
                  >
                    <LucideLinkedin />
                  </a>
                  <a
                    href="mailto:eguavoenemmanuel2019@gmail.com"
                    className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white transition-colors"
                  >
                    <Mail size={28} />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 dark:text-gray-300 font-medium">
                            Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-colors bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                              placeholder="Your name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 dark:text-gray-300 font-medium">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-colors bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                              placeholder="your.email@example.com"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300 font-medium">
                          Subject
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-colors bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                            placeholder="Project inquiry, collaboration, etc."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300 font-medium">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={5}
                            className="w-full h-[10rem] px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-colors resize-vertical bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                            placeholder="Tell me about your project or how we can work together..."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors flex items-center justify-center font-semibold"
                  >
                    <Send size={18} className="mr-2" />
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
