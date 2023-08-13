const TextArea = ({
    role,
    name,
    bio,
}: {
    role: string;
    name: string;
    bio: string;
}) => {
    return (
        <div className="my-0 mx-auto py-[32px] text-center text-[0px] md:max-w-[458px]  desktop:max-w-max desktop:text-left desktop:pt-[154px]">
            <small className="not-italic font-normal leading-normal text-center uppercase opacity-[0.4951] text-[16px] md:text-[24px] desktop:text-[32px]">
                {role}
            </small>
            <h4 className="text-[24px] not-italic font-normal leading-normal uppercase mt-[8px] mb-[16px] md:text-[40px] desktop:text-[56px] desktop:w-max desktop:mt-0 desktop:mb-[27px]">
                {name}
            </h4>
            <p className="text-light-purple barlow text-[15px] not-italic font-normal leading-[25px] md:text-[16px] md:leading-[28px] desktop:text-[18px] desktop:leading-[32px] desktop:max-w-[444px] desktop:min-h-[200px]">
                {bio}
            </p>
        </div>
    );
};

export default TextArea;
